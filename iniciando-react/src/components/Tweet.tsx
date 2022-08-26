type TweetProps = {
    text: string;
}

export function Tweet(propriedade: TweetProps){
    return (
        <p>{propriedade.text}</p>
    )
}