import React from 'react';
import {useDispatch} from 'react-redux';
import {loadData, putData} from '../../redux/actions';
import {useForm} from 'react-hook-form';
import { connect } from 'react-redux';

function Translator(props) {
    const {register, handleSubmit, errors} = useForm();

    const dispatch = useDispatch();
    const onSubmit = (values) => {
        dispatch(loadData(values.from, values.to, values.text));
    };

    return (
        <div className="content">
            <form className="translateForm" onSubmit={handleSubmit(onSubmit)}>
                <input className="langInput" type="text" name="from" placeholder="FROM"
                       ref={register} list="languages"/>
                <input className="langInput" type="text" name="to" placeholder="TO"
                       ref={register} list="languages"/>
                <datalist id="languages">
                    <option value="en">EN</option>
                    <option value="ru">RU</option>
                </datalist>

                <textarea name="text" ref={register}/>
                <input className="form bt" type="submit" value="TRANSLATE"/>
                <textarea name="translated" disabled  value={props.data}/>
            </form>
        </div>
    );

};

const mapStateToProps = function(state) {
    console.log(state);
    return {
        data: state.translateReducer.data,
    }
}

export default connect(mapStateToProps)(Translator);