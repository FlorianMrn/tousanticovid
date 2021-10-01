import axios from "axios";
import { toast } from 'react-toastify';

export async function getArticles(setter) {

    let config = {
        method: 'get',
        url: `${process.env.REACT_APP_BASE_URL}articles/`,
        headers: { }
    };

    axios(config)
        .then((response) => {
            return setter(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
   
};

export async function deleteArticle(id) {
    return axios.delete(`${process.env.REACT_APP_BASE_URL}articles/${id}/`)
        .then((response) => {
            toast.success('Article supprimé !');
        })
        .catch((error) => {
            console.log(error);
        });
};

export function getDiffHoursAndDays(dataDate) {
    const actualDate = new Date();
    const actualDay = actualDate.getDate();
    const actualHours = actualDate.getHours();
    const dataDay = parseInt(dataDate.slice(0, 2).split("/")[0]);
    const dataTime = parseInt(dataDate.split(" ")[2].slice(0, 2));
    const calculateDays = parseInt(31 - (parseInt(actualDate.toLocaleDateString('fr-FR'))) - parseInt(dataDate));


    if (dataDay === actualDay) {
        return `Il y a ${actualHours - dataTime} ${(actualHours - dataTime) > 1 ? "heures" : "heure"}`;
    }

    return `Il y a ${calculateDays} ${calculateDays > 1 ? "jours" : "jour"}`;
};

export function getTimeReading(text) {
    const readingTime = Math.round(text.split(" ").length / 250);
    return `${readingTime} ${readingTime <= 1 ? "minute" : "minutes"} de lecture`;
};
