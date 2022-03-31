import * as _ from 'lodash';
import { createApp } from 'vue';

import Example from './components/Example.vue'


function component(){
    const element = document.createElement('div');
    element.setAttribute('id', 'app')
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');    
    return element;
}

document.body.appendChild(component());
createApp(Example).mount('#app')