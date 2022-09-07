import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function Auth() {

    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("");

    const handleSignIn = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)
            const { error } = await supabase.auth.signIn({ email })

            if (error) throw error
            alert('Check your email for the login link!')
        } catch (error) {
            alert(error.error_description || error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            {loading ? (
                'Sending login link...'
            ) : (
                <div>
                    <input value={email} type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <button onClick={handleSignIn}>Sign In</button>
                </div>
            )}
        </div>
    );
}

