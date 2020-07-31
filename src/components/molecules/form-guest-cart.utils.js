import local from '../../mock-data/local';

export const getProvinces = () => {
  return local.map((province) => ({
    label: province.name,
    value: province.districts,
  }));
};

export const getDistricts = (districts) => {
  return districts?.map((district) => ({
    label: district.name,
    value: district.wards,
  }));
};

export const getWards = (wards) => {
  return wards?.map((ward) => ({
    label: ward.prefix + ' ' + ward.name,
    value: ward.id,
  }));
};
