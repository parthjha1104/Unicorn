import MeassageBubble from "./message_bubble";
import { Message } from "@/types/chat";

type Props = {
    messages: Message[];
};

export default function ChatWindow({ messages }: Props)
{
    return(
        <div className="h-96 overflow-y-auto border border-blue-700 ">
            {messages.length === 0 ? (
                <p className="text-gray-">
                Welcome to NTM-VA
            </p>
            ) : (
                messages.map((msg, index) =>(
                    <MeassageBubble
                        key={index}
                        message={msg}
                    />
                )


            )
            )
            }
        </div>
    )
}