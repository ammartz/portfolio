import Header from "../components/header"


function Register(){
    
    return(
        <div className="page">
            <div className="">
            <Header showBar={false} />
            </div>
            <div className="flex justify-center pt-20">
            <div className="bg-primary h-[400px] flex justify-center rounded-xl p-8 mt-16">
                <form className="flex flex-col justify-between" action="/api/register" method="POST">
                    <div className="grid grid-cols-2 text-start gap-y-7">
                        <label htmlFor='username'>Username</label>
                        <input id="username" type={'text'} name='username' required="required" placeholder="Jhon Doe" />
                        <label htmlFor='email'>E-mail</label>
                        <input id="email" type={'email'} name='email' required="required" placeholder="Jhon@Doe.com" />
                        <label htmlFor='password'>Password</label>
                        <input id="password" type={'password'} name='password' required="required" placeholder="******" minLength="8" />
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex justify-center items-center gap-2">
                            <input id="TnC" type={'checkbox'} required="required"/>
                            <label htmlFor="TnC">By checking the box, I agree to the Terms & conditions</label>
                        </div>
                    
                        <button type={'submit'}  className='bg-white rounded-lg bg-opacity-40 hover:bg-opacity-60 active:bg-white'>Submit</button>
                    </div>
                </form>
            </div>
            </div>
    
        </div>
    )
}

export default Register
//INSERT INTO `test_db`.`users` (`id`, `username`, `password`, `email`) VALUES ('1', 'ammar', '123', 'a@a.a');
