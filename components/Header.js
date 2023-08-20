const Header = () => {
  return (
    <header className="z-index-[999] font-sans fixed top-0 bg-[#f2f4f3] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 flex items-center justify-center py-4 w-full gap-3">
      <svg
        className="text-sm hi-solid hi-fire inline-block w-6 h-6 text-green-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
          clipRule="evenodd"
        />
      </svg>
      <span className="text-base font-medium">Jansen Cadorna</span>
    </header>
  );
};

export default Header;
