import { useState } from "react";
import { ButtonAction } from "./components/ButtonAction";
import { FormItem } from "./components/FormItem";
import { FormTextarea } from "./components/FormTextarea";

const App = () => {

    const[username, setUsernameText] = useState("")
    const[mail, setMailText] = useState("")
    const[comment, setCommentText] = useState("")
    const[history, setHistory] = useState([])

    const onChangeName = (event) => setUsernameText(event.target.value)
    const onChangeMail = (event) => setMailText(event.target.value)
    const onChangeComment = (event) => setCommentText(event.target.value)

     const submit = () => {
       const newhistory = [...history, [username, mail, comment]]
       setHistory(newhistory)
       console.log(history)
     }

    return(
        <div>
            <h1 className="text-blue-500 text-3xl font-bold underline">アンケートフォーム</h1>
            <form className="pt-5">
                <FormItem itemJapanese="名前" itemEnglish = {username} onChange = {onChangeName} className={`w-full px-2 pb-1.5 text-primary outline-none text-base font-light rounded-md`}></FormItem><br></br>
                <FormItem itemJapanese="メールアドレス" itemEnglish= {mail} onChange = {onChangeMail}></FormItem><br></br>
                <FormTextarea itemJapanese="感想" itemEnglish= {comment} onChange = {onChangeComment}></FormTextarea><br></br>
                <ButtonAction text = "送信" action={submit}></ButtonAction>
            </form><br></br>

            <table className="text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6">名前</th>
                  <th scope="col" className="py-3 px-6">メアド</th>
                  <th scope="col" className="py-3 px-6">感想</th>
                </tr>
              </thead>
              <tbody>
                {/* 🔽 履歴の配列から要素を生成して表示する */}
                {history.map((x, i) => (
                  <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">{x[0]}</td>
                    <td className="py-4 px-6">{x[1]}</td>
                    <td className="py-4 px-6">{x[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
  );
};

export default App;