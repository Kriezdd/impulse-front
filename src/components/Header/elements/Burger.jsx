const Burger = ({toggleNav}) => {
  return (
    <svg
      className="toggle-header-nav"
      onClick={() => toggleNav()}
      xmlns="http://www.w3.org/2000/svg" width="2.4rem" height="2.4rem" viewBox="0 0 24 24"
    >
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M3 6.001h18m-18 6h18m-18 6h18"/>
    </svg>
  );
};

export default Burger;