import { Link } from '@mui/material';

const CategoryComponents = (props) => {
  const { children, bgColor } = props;
  return (
    <Link
      href="#"
      underline="none"
      sx={{
        background: bgColor,
        color: 'white',
        padding: '4px 12px',
        fontSize: '12px',
        display: 'inline-block'
      }}
    >
      {children}
    </Link>
  )
}

export default CategoryComponents