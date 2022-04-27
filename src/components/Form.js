import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {dogActions} from "../redux/slices/dog.slice";
import {catActions} from "../redux/slices/cat.slice";
import './Form.css';

const Form = () => {
    const dogNameInput = useRef();
    const catNameInput = useRef();

    const catForUpdate = useSelector(({cat}) => cat.catForUpdate);

    useEffect(() => {
        if (catForUpdate?.name) {
            catNameInput.current.value = catForUpdate.name;
        }
    }, [catForUpdate]);

    const dispatch = useDispatch();

    function addDog() {
        dispatch(dogActions.addDog({dog: {name: dogNameInput.current.value}}));
        dogNameInput.current.value = '';
    }

    function saveCat() {
        if (catForUpdate?.id) {
            dispatch(catActions.updateCat({
                cat:
                    {
                        name: catNameInput.current.value,
                        id: catForUpdate?.id
                    }
            }));
        } else {
            dispatch(catActions.addCat({cat: {name: catNameInput.current.value}}));
        }

        catNameInput.current.value = '';
    }

    return (
        <div className="row">
            <div>
                <input type="text" ref={dogNameInput} placeholder="Додай пeсика!"/>
                <button onClick={addDog}>Add dog</button>
            </div>
            <div>
                <input type="text" ref={catNameInput} placeholder="Додай котика!"/>
                <button onClick={saveCat}>{catForUpdate?.id ? 'Update cat' : 'Add cat'}</button>
            </div>
        </div>
    );
};

export {Form};