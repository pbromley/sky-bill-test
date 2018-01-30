
export const rejectNonOKStatus = response => {
  if (response.status !== 200) {
    const error = new Error(response.responseText);
    error.response = response;
    throw error;
  } else {
    return response;
  }
};

export const parseJson = response => response.json();

export const GET = {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
};

