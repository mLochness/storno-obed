import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const redirect = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author};

        setIsPending(true);

        fetch('http://localhost:3200/kids', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("new blog added");
            setIsPending(false);
            redirect('/');
        })

    }

    return (
        <div className="login">
            <h2>Prihlásenie</h2>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="text" required 
                value={title}
                onChange={(e) => setTitle(e.target.value)} 
                />
                <label>Heslo</label>
                <input required 
                value={body}
                onChange={(e) => setBody(e.target.value)} />
                { !isPending && <button>Prihlásiť</button> }
                { isPending && <button disabled>Prihlasujem...</button> }
            </form>
        </div>
    );
}

export default Login;