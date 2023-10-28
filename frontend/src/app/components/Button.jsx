function Button({handleClick, isHidden}) {

  const className = `inside btn-extend-collapse flex justify-end ${isHidden ? 'hiddenMenuIcon' : 'visibleMenuIcon'}`;


  return (
    <button className={className} onClick={handleClick}><i class="fa-solid fa-bars"></i></button>
  )
}

export default Button