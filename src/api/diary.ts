// get pet list
export const getPetsByUserId = async (userId: number) => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/profile/v1/users/${userId}/pet`;
  console.log(url);

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });

    const data = await res.json();
    console.log('getPetsByUserId: ', data);
    return data;
  } catch (err) {
    console.error('getPetsByUserId error: ', err);
    return [];
  }
};

// create life record
export const createDiary = async (body: DiarydPayload) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/life-record/v2/create`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(body),
      },
    );

    const data = await res.json();
    console.log('createDiary: ', data);
    return data;
  } catch (err) {
    console.error('createDiary error: ', err);
  }
};

// check diary
export const checkDiary = async (petId: number, date: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/life-record/v2/pets/${petId}/check?date=${date}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      },
    );

    const contentType = res.headers.get('content-type');

    if (!res.ok) throw new Error('기록 확인 실패');

    if (contentType?.includes('application/json')) {
      const { data } = await res.json();
      console.log('res: ', data);
      return data;
    } else {
      const text = await res.text();
      console.log('res: ', text);
      return null;
    }
  } catch (err) {
    console.error('checkDiary error: ', err);
    return null;
  }
};

// update diary
export const updateDiary = async (
  lifeRecordId: number,
  data: DiarydPayload,
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/life-record/v2/${lifeRecordId}/update`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ ...data, lifeRecordId }),
      },
    );

    if (!res.ok) {
      const errText = await res.text();
      console.error('PATCH error:', errText);
      throw new Error('멍멍일지 수정 실패');
    }

    return await res.json();
  } catch (err) {
    console.error('updateDiary error: ', err);
    throw err;
  }
};

// get diary detail
export const getDiaryDetail = async (lifeRecordId: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/life-record/v2/detail/${lifeRecordId}`,
      {
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      },
    );
    const data = await res.json();
    console.log('res: ', data);
    return data.data;
  } catch (err) {
    console.error('getDiaryDetail error: ', err);
    throw err;
  }
};

// delete diary
export const deleteDiary = async (lifeRecordId: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/life-record/v2/${lifeRecordId}/delete`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      },
    );

    if (!res.ok) {
      const errText = await res.text();
      console.error('DELETE error:', errText);
      throw new Error('멍멍일지 삭제 실패');
    }

    return await res.text();
  } catch (err) {
    console.error('deleteDiary error:', err);
    throw err;
  }
};
