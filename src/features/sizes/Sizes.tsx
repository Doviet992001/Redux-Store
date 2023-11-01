import React, { useState } from "react";
import styles from "./Sizes.module.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { onActiveSizes, selectSizes } from "./sizesSlice";

type Props = {};

const Sizes = (props: Props) => {
  const size = useAppSelector(selectSizes);
  const dispatch = useAppDispatch();
  const selectSizeHandler = (a: any) => {
    dispatch(onActiveSizes(a));
  };
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <div style={{ width: "80%" }}></div>
      <div className={styles.sizes_container}>
        <p className={styles.sizes}>Sizes:</p>
        <div className={styles.sizes_type}>
          {size?.map((i) => {
            return (
              <div
                key={i.text}
                className={styles.label_sizes}
                onClick={() => selectSizeHandler(i)}
              >
                <input
                  className={styles.input}
                  type="checkbox"
                  data-testid="checkbox"
                  value={i.text}
                />
                <span
                  className={
                    !i.active ? styles.checkmark : styles.checkmark_active
                  }
                >
                  {i.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sizes;
