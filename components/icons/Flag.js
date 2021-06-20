const Flag = ({ size, fill }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height={size || 24}
    viewBox='0 0 24 24'
    width={size || 24}
    fill={fill || '#000'}
  >
    <path d='M0 0h24v24H0V0z' fill='none' /><path d='M12.36 6l.4 2H18v6h-3.36l-.4-2H7V6h5.36M14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6L14 4z' />
  </svg>
)

export default Flag
