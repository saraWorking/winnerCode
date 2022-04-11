import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../redux/actions/actions'
import Image from '../image/image'
import Header from '../header/header'
import { useHistory, useLocation } from "react-router-dom";
import './page.css'


export default function Page() {
    const dispatch = useDispatch();
    const listInnerRef = useRef();
    const imagesList = useSelector(state => state.imagesList);
    const history = useHistory();
    const [filerImages, setFilerImages] = useState([])
    const [sortBy, setSortBy] = useState('SortBy')
    const [string, setString] = useState('')
    const [itemsPerPage, setItemsPerPage] = useState(parseInt(useLocation()?.state?.itemsPerPage));
    const [fromToCompare, setFromToCompare] = useState(parseInt(useLocation()?.state?.from));
    const [from, setFrom] = useState(parseInt(useLocation()?.state?.from));



    useEffect(() => {
        if (!imagesList.length) {
            history.push("/");
        }
        setFilerImages(imagesList);
        window.addEventListener('scroll', e => handleScroll(e), true);
        return () => {
            window.removeEventListener('scroll', e => handleScroll(e), true);
        };
    }, [])

    useEffect(() => {
        sort(filerImages);
    }, [sortBy])

    useEffect(() => {
        search();
    }, [string])

    useEffect(() => {
        setFilerImages(imagesList);//update screen when scrolling
        if (string) {
            search();
        }
    }, [imagesList])

    useEffect(() => {
        if (from != fromToCompare) {
            dispatch(actions.getPage({ itemsPerPage, from }));
            search();
        }
    }, [from])

    const sort = (list) => {
        list.sort((a, b) => {

            switch (sortBy) {
                case "TitleASC":
                    return a.title <= b.title ? -1 : 1

                case "TitleDESC":
                    return a.title > b.title ? -1 : 1

                default:
                    return a.id < b.id ? -1 : 1;
            }
        });
        setFilerImages([...list])
    }

    const search = () => {
        let filterImages = imagesList.filter((image) => {
            return image.title.toLowerCase().startsWith(string.toLowerCase()) == true;
        })
        sort(filterImages)
    }
    const handleScroll = (e) => {
        const el = e.target.documentElement;
        const bottom = el.scrollHeight - el.scrollTop === el.clientHeight;
        if (bottom) {
            nextPage();
        }
    };

    const nextPage = () => {
        setFrom(prev => prev + itemsPerPage);
    }

    return (<>
        <Header setSortBy={setSortBy} setString={setString} sortBy={sortBy}></Header>


        <div className="container"
            ref={listInnerRef}
            style={{ height: "", overflowY: "auto" }}>
            {filerImages[0] && filerImages.map((image, i) => (
                <Image
                    key={i}
                    url={image.thumbnailUrl} title={image.title}
                ></Image>
            ))}

        </div>
        {window.scrollY == 0 && <bottom className="btn btn-primary"//if hasn't scroll 
            onClick={() => { nextPage() }}>get the next page</bottom>}
    </>
    )
}


