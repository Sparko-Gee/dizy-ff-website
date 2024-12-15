import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hngylbjqnktlgcogthpp.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuZ3lsYmpxbmt0bGdjb2d0aHBwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxMjczNTIsImV4cCI6MjA0OTcwMzM1Mn0.NEYA9CQATLrblrxJbv-9N_MAvk9-lMjeiYdCHKKmcVE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function signUp(email, password, username) {
    try {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    username
                }
            }
        })
        
        if (error) throw error
        return { data, error: null }
    } catch (error) {
        return { data: null, error: error.message }
    }
}

export async function signIn(email, password) {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        })
        
        if (error) throw error
        return { data, error: null }
    } catch (error) {
        return { data: null, error: error.message }
    }
}

export async function signOut() {
    try {
        const { error } = await supabase.auth.signOut()
        if (error) throw error
        return { error: null }
    } catch (error) {
        return { error: error.message }
    }
}

export async function getCurrentUser() {
    try {
        const { data: { user }, error } = await supabase.auth.getUser()
        if (error) throw error
        return { user, error: null }
    } catch (error) {
        return { user: null, error: error.message }
    }
}