import axios from 'axios';
import { useState } from 'react';

function MonsterCard({data}) {
    return (
        <div className="dataCard">
            <img 
                src={"https://www.dnd5eapi.co" + data.image} 
                alt={"Art of " + data.name}
                title={data.name}
            />
            <p className="title">{data.name}</p>
            <p><strong>HP:</strong> {data.hit_points ? data.hit_points : "???"}</p>
            <p><strong>Type:</strong> {data.type ? data.type : "None"}</p>
            <p><strong>Size:</strong> {data.size ? data.size : "None"}</p>
            <p><strong>Alignment:</strong> {data.alignment ? data.alignment : "None"}</p>
            <p><strong>Languages:</strong> {data.languages ? data.languages : "None"}</p>
            <p><strong>Strength:</strong> {data.strength ? data.strength : "None"}</p>
            <p><strong>Description:</strong> { data.desc ? data.desc : "None"}</p>
        </div>
    )    
}

function SpellCard({data}) {
    return (
        <div className="dataCard">
            <p className="title">{data.name}</p>
            <p><strong>HP:</strong> {data.hit_points ? data.hit_points : "???"}</p>
            <p><strong>Type:</strong> {data.type ? data.type : "None"}</p>
            <p><strong>Size:</strong> {data.size ? data.size : "None"}</p>
            <p><strong>Alignment:</strong> {data.alignment ? data.alignment : "None"}</p>
            <p><strong>Languages:</strong> {data.languages ? data.languages : "None"}</p>
            <p><strong>Strength:</strong> {data.strength ? data.strength : "None"}</p>
            <p><strong>Description:</strong> { data.desc ? data.desc : "None"}</p>
        </div>
    )    
}

function DataCard({data, type}) {
    if (JSON.stringify(data) === '{}') {
        return (
            <></>
        )
    }
    if (type === "monsters") {
        return <MonsterCard data={data}/>
    } else if (type === "spells") {
        return <SpellCard data={data}/>
    }
    
}

function DndSearch() {
    const[search, setSearch] = useState("monsters"); 
    const[header, setHeader] = useState("Searching for Monsters...");
    const[data, setData] = useState("");

    async function Search(e, type) {
        const result = document.getElementById("result");
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        const input = formJson.searchInput;
        result.innerHTML = "Searching...";
    
        // See if monster exists
        const monster = await axios
            .get(`https://www.dnd5eapi.co/api/` + type, {
                headers: {
                    "Accept":"application/json"
                }
            })
            .then((response) => {
                const monsters = response.data.results;
                const matchedMonster = monsters.find(
                  (monster) => monster.name.toLowerCase() === input.toLowerCase()
                );
                if (matchedMonster) {
                    result.innerHTML = "Found!";
                    return matchedMonster;
                } else {
                    return false;
                }
            })
            .catch((error) => {
                result.innerHTML = "Error fetching " + type + ".";
        });
    
        // If the monster doesnt exist:
        if (monster === false) {
            if (type === "monsters") {
                result.innerHTML = "Monster not found.";
            }
            else {
                result.innerHTML = "Spell not found.";
            }
            setData({});
            return false;
        }
    
        // Get specific monster data
        const data = await axios
            .get(`https://www.dnd5eapi.co` + monster.url)
            .then((monsterResponse) => {
                const monsterData = monsterResponse.data;
                return monsterData;
            })
            .catch((error) => {
                result.innerHTML = "Error fetching " + type + " details.";
        });
        setData(data);
        return true;
    }

    return (
        <div className="dndSearchPage">
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Monster Search</title>
            <h1>D&D Information</h1>
            <div className="choiceButtons">
                <button onClick={() => {setSearch("monsters"); setHeader("Searching for Monsters...")}}>
                    Search for monsters
                </button>
                <button onClick={() => {setSearch("spells"); setHeader("Searching for Spells...")}}>
                    Search for spells
                </button>
                <h2>{header}</h2>
            </div>
            <br />
            <form onSubmit={e => {e.preventDefault(); Search(e, search);}}>
                <input
                    name="searchInput"
                    id="monsterInput"
                    placeholder="Enter a monster name"
                />
                <button type="submit" id="searchButton">Search</button>
            </form>
            <div id="result" className="result" />
            <div className="data">
                <DataCard 
                    data={data} 
                    type={search}
                />
            </div>
        </div>
    )
}

export default DndSearch;