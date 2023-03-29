export default function Characters(props) {
    return (
        <div className="cucco">
            <h1>Characters</h1>
            <CharactersList characters={props.characters} />
        </div>
    )
}