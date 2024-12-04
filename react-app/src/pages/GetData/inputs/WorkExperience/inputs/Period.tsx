const Dates = () => {
    return (
        <div>
            <p>Период работы</p>
            <label>
                <p>с</p>
                <input name="from" type="date"/>
            </label>
            <label>
                <p>по</p>
                <input name="to" type="date"/>
            </label>
        </div>
    );
};

export default Dates;
