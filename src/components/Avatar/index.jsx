import style from './styles.module.css';

export default function Avatar({ other }) {
  return (
    <li className={style.wrapper}>
      <img width={50} height={50} src={other.presence.avatar} />
      <span className={style.tooltip}>{other.presence.username}</span>
    </li>
  )
}