function DndSearch() {
    return (
        <div className="dndSearchPage">
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Monster Search</title>
            <h1>Monster Search</h1>
            <input
                type="text"
                id="monsterInput"
                className="dnd"
                placeholder="Enter a monster name"
            />
            <button id="searchButton">Search</button>
            <div id="monsterResult" className="monster-result" />
        </div>
    )
}

export default DndSearch;