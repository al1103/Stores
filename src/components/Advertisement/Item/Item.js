import classNames from "classnames/bind";
import style from "./Item.module.scss";
const cx = classNames.bind(style);
function Item({ children }) {
  return (
    <div className={cx("advertisement")}>
      <div className={cx("advertisement__content")}>
        <div className={cx("advertisement__content__img")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <title>Airplane</title>
            <path
              d="M407.72 224c-3.4 0-14.79.1-18 .3l-64.9 1.7a1.83 1.83 0 01-1.69-.9L193.55 67.56a9 9 0 00-6.66-3.56H160l73 161a2.35 2.35 0 01-2.26 3.35l-121.69 1.8a8.06 8.06 0 01-6.6-3.1l-37-45c-3-3.9-8.62-6-13.51-6H33.08c-1.29 0-1.1 1.21-.75 2.43l19.84 71.42a16.3 16.3 0 010 11.9L32.31 333c-.59 1.95-.52 3 1.77 3H52c8.14 0 9.25-1.06 13.41-6.3l37.7-45.7a8.19 8.19 0 016.6-3.1l120.68 2.7a2.7 2.7 0 012.43 3.74L160 448h26.64a9 9 0 006.65-3.55L323.14 287c.39-.6 2-.9 2.69-.9l63.9 1.7c3.3.2 14.59.3 18 .3C452 288.1 480 275.93 480 256s-27.88-32-72.28-32z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="15"
            />
          </svg>
        </div>
        <div className={cx("advertisement__content__text")}>
          <p className={cx("title")}>Free Shipping</p>
          <p className={cx("content")}>Free Shipping On All Order</p>
        </div>
      </div>
      {/* 2 */}
      <div className={cx("advertisement__content")}>
        <div className={cx("advertisement__content__img")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 48 48"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M24 2.5A21.5 21.5 0 1 1 2.5 24A21.51 21.51 0 0 1 24 2.5Z"
            />
            <circle
              cx="24"
              cy="24"
              r="2.5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M24 21.5V11.44m2.1 13.91l12.2 7.8"
            />
          </svg>
        </div>
        <div className={cx("advertisement__content__text")}>
          <p className={cx("title")}>Money Suarantee</p>
          <p className={cx("content")}>30 Day Monney Back</p>
        </div>
      </div>
      {/* 3 */}
      <div className={cx("advertisement__content")}>
        <div className={cx("advertisement__content__img")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <title>Headset</title>
            <path
              d="M83 384c-13-33-35-93.37-35-128C48 141.12 149.33 48 256 48s208 93.12 208 208c0 34.63-23 97-35 128"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="15"
            />
            <path
              d="M108.39 270.13l-13.69 8h0c-30.23 17.7-31.7 72.41-3.38 122.2s75.87 75.81 106.1 58.12h0l13.69-8a16.16 16.16 0 005.78-21.87L130 276a15.74 15.74 0 00-21.61-5.87zM403.61 270.13l13.69 8h0c30.23 17.69 31.74 72.4 3.38 122.19s-75.87 75.81-106.1 58.12h0l-13.69-8a16.16 16.16 0 01-5.78-21.87L382 276a15.74 15.74 0 0121.61-5.87z"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="15"
            />
          </svg>
        </div>
        <div className={cx("advertisement__content__text")}>
          <p className={cx("title")}>Online Support 24/7</p>
          <p className={cx("content")}>Technical Support 24/7</p>
        </div>
      </div>
      {/* 4 */}
      <div className={cx("advertisement__content")}>
        <div className={cx("advertisement__content__img")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.19em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 38 32"
          >
            <g fill="currentColor">
              <path d="M32.509 7.5a.5.5 0 0 0 .5-.5V5.335a1.64 1.64 0 0 0-1.638-1.638h-2.687l-.613-1.809a.5.5 0 0 0-.619-.318L12.899 5.994a.501.501 0 0 0 .292.957L27.28 2.667l1.343 3.965a.499.499 0 1 0 .947-.321l-.547-1.615h2.349c.352 0 .638.286.638.638V7c-.001.276.223.5.499.5z" />
              <path d="M36.5 15a.5.5 0 0 0 0 1c.351 0 .5.149.5.5v6c0 .351-.149.5-.5.5h-8c-.351 0-.5-.149-.5-.5v-5c0-.351.149-.5.5-.5h6a.5.5 0 0 0 .5-.5v-6c0-.911-.589-1.5-1.5-1.5H3c-1.233 0-2-.767-2-2s.767-2 2-2h5.076l-3.026.998a.5.5 0 1 0 .313.949L23.482.974a.5.5 0 1 0-.314-.95l-12.1 3.99C11.045 4.01 11.024 4 11 4H3C1.206 4 0 5.206 0 7v22c0 1.794 1.206 3 3 3h30.5c.911 0 1.5-.589 1.5-1.5v-5a.5.5 0 0 0-1 0v5c0 .351-.149.5-.5.5H3c-1.233 0-2-.767-2-2V9.312c.513.433 1.192.688 2 .688h30.5c.351 0 .5.149.5.5V16h-5.5c-.911 0-1.5.589-1.5 1.5v5c0 .911.589 1.5 1.5 1.5h8c.911 0 1.5-.589 1.5-1.5v-6c0-.911-.589-1.5-1.5-1.5z" />
              <circle cx="32" cy="20" r="1" />
            </g>
          </svg>
        </div>
        <div className={cx("advertisement__content__text")}>
          <p className={cx("title")}>Secure Payment</p>
          <p className={cx("content")}>AI Cards Accepted</p>
        </div>
      </div>
    </div>
  );
}

export default Item;
