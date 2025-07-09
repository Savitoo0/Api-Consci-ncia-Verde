    // src/app/components/ListSection.tsx

    const ListSection = () => {
        const items = ['Item 1', 'Item 2', 'Item 3'];

        return (
            <div className="list-section">
                <h2>Lista de Itens</h2>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        );
    };

    export default ListSection;
    