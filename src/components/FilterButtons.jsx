function FilterButtons({ filter, setFilter }) {

  const filters = [
    "All",
    "Applied",
    "Interview",
    "Accepted",
    "Rejected"
  ];

  return (

    <div className="filters">

      {filters.map(item => (

        <button
          key={item}
          className={
            filter === item
              ? "filter-btn active"
              : "filter-btn"
          }
          onClick={() =>
            setFilter(item)}
        >
          {item}
        </button>

      ))}

    </div>
  );
}

export default FilterButtons;