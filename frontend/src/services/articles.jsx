import axios from "axios";

export async function getArticles(setter) {
    axios.get(`${process.env.REACT_APP_BASE_URL}articles/`)
        .then(function (response) {
            return setter(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });
};

export async function getDiffHoursAndDays(dataDate) {
    const actualDate = new Date();
    const actualDay = actualDate.getDate();
    const actualHours = actualDate.getHours();
    const dataDay = parseInt(dataDate.slice(0, 2).split("/")[0]);
    const dataTime = parseInt(dataDate.split(" ")[2].slice(0, 2));

    if (dataDay === actualDay) {
        return `Il y a ${actualHours - dataTime} ${(actualHours - dataTime) > 1 ? "heures" : "heure"}`;
    }

    return `Il y a ${actualDay - dataDay} ${(actualDay - dataDay) > 1 ? "jours" : "jour"}`;
};

export async function getTimeReading(text) {
    const readingTime = Math.round(text.split(" ").length / 250);
    return `${readingTime} ${readingTime <= 1 ? "minute" : "minutes"} de lecture`;
};

// {filteredArticles.map((article, index) => (
//     <div key={index} className="bg-white shadow border border-blue">
//         <img src={articles[0].imageFile} alt="Article" className="object-cover"/>
//         <div className="p-2 pl-3 relative ">
//             <h2 className="font-marianne text-secondaryBody inline font-bold">{articles[0].title}</h2>
//             <p className="absolute bottom-2 font-marianne text-button italic">{getDiffHoursAndDays(article.created)} - {getTimeReading(article.text)}</p>
//         </div>
//     </div>
// ))}