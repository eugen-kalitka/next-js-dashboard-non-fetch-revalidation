import nodeFetch from 'node-fetch'

export async function getDataCustomFetch () {
  try {
    let data;
    if (typeof window === 'undefined') {
      data = await nodeFetch('https://www.randomnumberapi.com/api/v1.0/random?max=1000&count=3')
    } else {
      data = await fetch('https://www.randomnumberapi.com/api/v1.0/random?max=1000&count=3', {
        next: {
          revalidate: 60
        }
      })
    }
    return data.json();
  } catch (e) {
    console.log('Error occurred: ', e);

    return [];
  }
}

export async function getData () {
  try {
    const data = await fetch('https://www.randomnumberapi.com/api/v1.0/random?max=1000&count=3', {
      next: {
        revalidate: 60
      }
    })
    return data.json();
  } catch (e) {
    console.log('Error occurred: ', e);

    return [];
  }
}