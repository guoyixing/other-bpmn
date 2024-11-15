import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error('Root element not found')
}
refreshWindow(rootElement)
//监听浏览器，当浏览器的窗口大小发生变化时，改变rootElement的大小
window.addEventListener('resize', () => {
    refreshWindow(rootElement)
});

createRoot(rootElement!).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)

function refreshWindow(element: HTMLElement) {
    element.style.width = document.documentElement.clientWidth - 1 + 'px';
    element.style.height = document.documentElement.clientHeight - 1 + 'px';
    console.log('refreshWindow', element.style.width, element.style.height)
}
