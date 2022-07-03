import Button from "../uiElements/Button";
import ButtonWithIcon from "../uiElements/ButtonWithIcons";
import "./CartItem.css";
const CartItem = (props) => {
  const {
    imageURL,
    name,
    price,
    quantity,
    onAdd,
    onRemove,
    onDelete,
    quantityLimit,
  } = props;
  return (
    <div className="cart_item_card">
      <div className="info_box">
        <h3 className="cart_item_heading">{name}</h3>
        <p>
          Price:<span className="cart_item_value">{price}</span>
        </p>
        <p className="cart_item_qty">
          Quantity:<span className="cart_item_value">{quantity}</span>
        </p>
        {quantityLimit === quantity && (
          <p className="err_text2">Order limit:{quantityLimit}</p>
        )}
      </div>
      <div className="image_box">
        <img className="cart_item_image" alt={name} src={`${imageURL}`} />
      </div>
      <div className="button_box">
        <div>
          <ButtonWithIcon
            btnClass="increase_btn"
            isdisabled={quantityLimit === quantity}
            iconClass="add_icon "
            click={onAdd}
            imageAddress="https://www.freeiconspng.com/thumbs/add-icon-png/add-1-icon--flatastic-1-iconset--custom-icon-design-0.png"
          ></ButtonWithIcon>
          <ButtonWithIcon
            btnClass="decrease_btn"
            iconClass="minus_icon "
            click={onRemove}
            imageAddress="https://cdn1.iconfinder.com/data/icons/vibrancie-action/30/action_022-remove-delete-subtract-minus-512.png"
          ></ButtonWithIcon>
        </div>
        <Button className="delete_btn" click={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
