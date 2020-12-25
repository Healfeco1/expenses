import React from 'react';
import {startUi} from '../../services/firebase'

export default class Page extends React.Component {

    componentDidMount(){
        startUi('#firebaseui');
    }
    render() {
        return (
            <>
                <div id="firebaseui"></div>
            </>
        )
    }
}
