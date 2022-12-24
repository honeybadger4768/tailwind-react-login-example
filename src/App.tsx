import React, {useState} from "react";
import {Input} from "components/Input";


const App = () => {

    const [inputs, setInputs] = useState<{ username: string, password: string }>({
        username: "", password: ""
    })

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(inputs)
    }

    return (
        <div className={"flex justify-center w-screen h-screen bg-my-green"}>
            <div className={"flex flex-col justify-center items-center mt-20 w-1/4 h-1/3 bg-white box-shadow-2xl"}>
                <h1 className={"text-3xl text-btn-green"}>Login</h1>
                <form onSubmit={onSubmit} className={"flex flex-col justify-center items-center"}>
                    <Input
                        value={inputs.username}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setInputs(a => ({
                                ...a,
                                username: e.target.value
                            }))
                        }}
                        placeholder={"username"}
                    />
                    <Input
                        value={inputs.password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setInputs(a => ({
                                ...a,
                                password: e.target.value
                            }))
                        }}
                        placeholder={"password"}
                    />
                    <button
                        type={"submit"}
                        className={"w-72 h-14 bg-btn-green text-white"}
                    >
                        LOGIN
                    </button>
                    <div className={"flex mt-1"}>
                        <p className={"text-right text-gray-500"}>If you haven't an account</p>&nbsp;
                        <span className={"text-btn-green hover:cursor-pointer"} >Sign Up Here</span>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default App;
