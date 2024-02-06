import { useEffect, useState } from "react";
import SectionFilters from "../SectionFilters";
import ContainerCollects from "../ContainerCollects";

import styles from './AllCollects.module.css';

const AllCollects = ({icon, nome, collection}) => {
    const [filterCollects, setFilterCollects] = useState([]);

    useEffect(()=>{
        let filteredCollection = collection.filter(item => item.materia_prima === nome);
        setFilterCollects(filteredCollection);
        console.log(filteredCollection)
    }, [])

    return(
        <div className={styles.AllCollects}>
            <SectionFilters icon={icon} nome={nome}/>
            <ContainerCollects collection={filterCollects} icon={icon}/>
        </div>
    )
}

export default AllCollects;