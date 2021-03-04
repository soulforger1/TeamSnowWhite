import firestore from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';

export const useFireStoreDoc: any = (path: string) => {
  const [doc, setDoc] = useState(null);

  useEffect(() => {
    firestore()
      .doc(path)
      .onSnapshot((res: any) => setDoc(res.data()));
  }, [path]);

  const updateDoc = (data: any) => {
    firestore()
      .doc(path)
      .set(
        {
          ...data,
        },
        {merge: true},
      );
  };

  const deleteDoc = () => firestore().doc(path).delete();

  return {doc, updateDoc, deleteDoc};
};

export const useFireStoreCol = (path: any) => {
  const [collection, setCollection] = useState<any>([]);

  const createDoc = (data: any) => {
    firestore().collection(path).add(data);
  };

  useEffect(() => {
    if (path === '') {
      firestore()
        .collection('users')
        .get()
        .then((res) => {
          const array: any = res.docs.map((cur) => {
            return cur.data();
          });
          setCollection(array);
        });
    } else {
      firestore()
        .collection(path)
        .onSnapshot((res) => {
          const array: any = res.docs.map((cur) => {
            return cur.data();
          });
          setCollection(array);
        });
    }
  }, [path]);
  return {collection, createDoc};
};

export const useCollectionSearch = (path: any, field: any, value: any) => {
  const [collection, setCollection] = useState([]);
  useEffect(() => {
    firestore()
      .collection(path)
      .onSnapshot((querySnapshot: any) => {
        const events = querySnapshot.docs.map((cur: any) => cur.data());
        if (field === 'tags') {
          const array = events.filter((cur: any) => {
            var passed = false;
            cur[field].forEach((element: string) => {
              if (element === value) passed = true;
            });
            return passed;
          });
          setCollection(array);
        } else
          setCollection(
            events.filter(
              (cur: any) =>
                cur[field] &&
                cur[field].toLowerCase().search(value.toLowerCase()) !== -1 &&
                value !== '',
            ),
          );
      });
  }, [path, field, value]);

  return {collection};
};
