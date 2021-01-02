const styles = (theme) => ({
  listSearch: {
    position: 'absolute',
    // top: '43px',
    backgroundColor: '#fff',
    border: '1px solid #dfe4ea',
    // width: '100%',
    borderRadius: '5px',
    boxShadow: '0px 5px 18px 3px #e1e1e1',
    top: '298px',
    width: '656px',
    marginLeft: '-4px',
    zIndex: 99,
    // marginTop: '5px',
  },
  Item: {
    '&:hover': {
      backgroundColor: '#007bff',
      color: '#ffffff',
    },
    height: '54px',
  },
  addProduct: {
    borderBottom: '1px solid rgb(223, 218, 218)',
    padding: '0px 0px',
    cursor: 'pointer',
  },
});
export default styles;
