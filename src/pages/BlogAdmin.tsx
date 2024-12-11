import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { emailService } from '../lib/emailService';
import toast from 'react-hot-toast';

export const BlogAdmin = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPublishing, setIsPublishing] = useState(false);

  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPublishing(true);

    try {
      // Save blog post to Supabase
      const { data: post, error: postError } = await supabase
        .from('blog_posts')
        .insert([
          { title, content, published_at: new Date().toISOString() }
        ])
        .select()
        .single();

      if (postError) throw postError;

      // Get all subscribers
      const { data: subscribers, error: subscribersError } = await supabase
        .from('subscribers')
        .select('email');

      if (subscribersError) throw subscribersError;

      // Send newsletter to subscribers
      if (subscribers?.length > 0) {
        await emailService.sendNewsletterEmail(
          subscribers.map(sub => sub.email),
          content,
          `New Blog Post: ${title}`
        );
      }

      toast.success('Blog post published successfully!');
      setTitle('');
      setContent('');
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-orange-500 mb-8"
        >
          Create Blog Post
        </motion.h1>

        <form onSubmit={handlePublish} className="space-y-6">
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Post Title"
              className="w-full px-4 py-2 rounded bg-black/30 border border-orange-500/50 text-white focus:outline-none focus:border-orange-500"
              required
            />
          </div>

          <div>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your post content..."
              className="w-full h-64 px-4 py-2 rounded bg-black/30 border border-orange-500/50 text-white focus:outline-none focus:border-orange-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isPublishing}
            className="w-full bg-orange-500 text-white py-2 rounded font-bold hover:bg-orange-600 transition-colors disabled:opacity-50"
          >
            {isPublishing ? 'Publishing...' : 'Publish Post'}
          </button>
        </form>
      </div>
    </div>
  );
};