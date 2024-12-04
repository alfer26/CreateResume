import { ContextType, createContext, useState } from 'react';
import './App.css'
import DataInput from './pages/GetData/GetData';

export const Data = createContext<ContextType | null>(null)

const App = () => {
    const [data, setData] = useState({})
    return (
        <Data.Provider value={{data, setData}}>
            <DataInput />
        </Data.Provider>
    );
}

export default App;