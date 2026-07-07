import ReactMarkdown from "react-markdown"
import { Message} from "@/types/chat"

type Props = {
    message : Message;
};

export default function MeassageBubble({ message }: Props){
    return(
        <div
            className={`mb-4 flex ${
                message.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
        >
            <div
                className={`max-w-[75%] rounded-xl p-3 ${
                    message.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-white"
                }`}
            >
                <ReactMarkdown>
                    {message.content}
                </ReactMarkdown>

            </div>

        </div>
    )
}