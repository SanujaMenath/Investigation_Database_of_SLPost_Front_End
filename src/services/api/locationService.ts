export const fetchProvinces = async () => {
    const response = await fetch("/api/locations/provinces");
    return response.json();
  };

  
  export const fetchDivisions = async () => {
    const response = await fetch("/api/locations/divisions");
    return response.json();
  };
  