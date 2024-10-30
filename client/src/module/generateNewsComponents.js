import {listImageComponent, listNewsDataComponent, olympicComponent, weatherComponent} from "./generateComponentData";
import shuffleArray from "../helper/shuffleArray";

export async function fetchNewsData() {
    return Promise.all([listNewsDataComponent, listImageComponent])
        .then(result => {
            const listComponent = [];
            listComponent.push(weatherComponent, olympicComponent, ...shuffleArray([...result[0], ...result[1]]))
            return listComponent;
        });

}

