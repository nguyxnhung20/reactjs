import { useState } from 'react';
import ListResultSearch from './childComponent/ListResultSearch';
import SearchBox from './childComponent/SearchBox';
import './searchPage.scss';

const dataMock = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: [
      {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
    ],
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: [
      {
        street: 'Victor Plains',
        suite: 'Suite 879',
        city: 'Wisokyburgh',
        zipcode: '90566-7771',
        geo: {
          lat: '-43.9509',
          lng: '-34.4618',
        },
      },
      {
        street: 'Victor Plains',
        suite: 'Suite 879',
        city: 'Wisokyburgh',
        zipcode: '90566-7771',
        geo: {
          lat: '-43.9509',
          lng: '-34.4618',
        },
      },
    ],
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains',
    },
  },
];

function SearchPage() {
  // list data content
  const [data, setData] = useState(dataMock);
  const searchName = (nameinput) => {
    // Tim kiem ten giong voi trong danh sach vaf hien thi len
    if (nameinput !== '') {
      // spread operaror --- clone new array not referent
      const resultClone = [...data];

      // filter loc array
      const newdata = resultClone.filter((el) => {
        // toLocaleLowerCase in thuong chu
        // includes kiem tra element co chua ky tu ban truyen vao hay khong
        return el.name
          .toLocaleLowerCase()
          .includes(nameinput.toLocaleLowerCase());
      });
      // set lai new array
      setData(newdata);
    } else {
      setData(dataMock);
    }
  };

  return (
    <>
      <section className="search-content">
        <SearchBox onSearch={searchName} />
        <ListResultSearch data={data} />
      </section>
    </>
  );
}

export default SearchPage;
