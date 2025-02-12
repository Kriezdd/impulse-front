const Burger = ({toggleNav}) => {
  return (
    <svg
      className="toggle-header-nav"
      onClick={() => toggleNav()}
      xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 24"
    >
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
            d="M3 6.001h18m-18 6h18m-18 6h18"/>
    </svg>
  );
};

export default Burger;