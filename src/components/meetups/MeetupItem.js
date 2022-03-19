import { useContext } from 'react';
import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import FavoritesContext from '../../store/favorites-context';

export default function MeetupItem({ id, image, title, address, description }) {
  const favoritexCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritexCtx.itemIsFavorite(id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritexCtx.removeFavorite(id);
    } else {
      favoritexCtx.addFavorite({
        id: id,
        title: title,
        image: image,
        address: address,
        description: description,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
}
