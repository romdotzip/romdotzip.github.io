import axios from 'axios';
import { useState } from 'react';

var searchData = null;

function Data() {
    return (
        <p>Data</p>
    )
}

function Search(e, type) {
    const result = document.getElementById("result");
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    const input = formJson.searchInput;
    var desc = "";
    result.innerHTML = "Searching...";

    axios
        .get(`https://www.dnd5eapi.co/api/` + type)
        .then((response) => {
            const monsters = response.data.results;
            const matchedMonster = monsters.find(
              (monster) => monster.name.toLowerCase() === input
            );
            if (matchedMonster) {
              axios
                .get(`https://www.dnd5eapi.co` + matchedMonster.url)
                .then((monsterResponse) => {
                    const monsterData = monsterResponse.data;
                    searchData = monsterData;
                    if (type === "monsters") {
                        if (monsterData.desc) {

                        } else {
                            result.innerHTML = `
                            <p>${monsterData.name}, ${monsterData.desc}, ${monsterData.image}</p>
                            `;
                        }
                    } else {
                        result.innerHTML = `
                        <p>${monsterData.name}, ${monsterData.desc}, ${monsterData.level}, ${monsterData.range}, ${monsterData.image}</p>
                        `;
                    }
                })
                .catch((error) => {
                    result.innerHTML = "Error fetching " + type + " details.";
                });
            } else {
                if (type === "monsters") {
                    result.innerHTML = "Monster not found.";
                }
                else {
                    result.innerHTML = "Spell not found.";
                }
            }
          })
          .catch((error) => {
            result.innerHTML = "Error fetching " + type + ".";
        });
}




function DndSearch() {
    const[search, setSearch] = useState("monsters"); 
    const[header, setHeader] = useState("Searching for monsters...");
    const[displayData, setDisplayData] = useState(false);

    function ChoiceButton({type, children}) {
        return (
            <button onClick={() => { setSearch(type); setHeader("Searching for " + type + "...")}}>
                {children}
            </button>
        )
    }

    return (
        <div className="dndSearchPage">
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Monster Search</title>
            <h1>D&D Information</h1>
            <div className="choiceButtons">
                <ChoiceButton type="monsters">Search for monsters</ChoiceButton>
                <ChoiceButton type="spells">Search for spells</ChoiceButton>
                <h2>{header}</h2>
            </div>
            <br />
            <form onSubmit={e => {e.preventDefault(); setDisplayData(Search(e, search));}}>
                <input
                    name="searchInput"
                    id="monsterInput"
                    placeholder="Enter a monster name"
                />
                <button type="submit" id="searchButton">Search</button>
            </form>
            <div id="result" className="result" />
            <div className="data">
                {displayData && <Data/>}
            </div>
        </div>
    )
}

export default DndSearch;