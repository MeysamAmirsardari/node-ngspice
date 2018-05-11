const ref = require('ref');
const c_struct = require('ref-struct');

const _ng_complex = c_struct({
  // complex number struct
  // you should know this!
  'ng_real' : 'double',
  'ng_imag' : 'double'
});

const _vector_info = c_struct({
  // vector  name : name of this vector
  // vector  type :
  // vector  flag :
  // real    data : real number array
  // complex data : complex number array
  // array length : vector length
  'v_name'        : 'string',
  'v_type'        : 'int',
  'v_flags'       : 'short',
  'v_real_arr'    : ref.refType('double'),
  'v_comp_arr'    : ref.refType(_ng_complex),
  'v_length'      : 'int'
});
const _p_vector_info = ref.refType(_vector_info);

const _vec_info = c_struct({
  // v_index     : index of this vector
  // v_name      : the name of this vector
  // v_is_real   : indicate if this vector is a complex vector
  // v_pd        :
  // v_pd_scale  :
  'v_index'      : 'int',
  'v_name'       : 'string',
  'v_is_real'    : 'bool',
  'v_pd'         : ref.refType('void'),
  'v_pd_scale'   : ref.refType('void')
});
const _p_vec_info = ref.refType(_vec_info);

const _vec_info_all = c_struct({
  // c_name      : name of this circuit
  // c_title     : circuit of this circuit
  // c_date      : date of this simulation
  // c_type      : simulation type
  // c_vec_count : the number of vectors could get in this plot
  // c_vecs      : vectors
  'c_name'       : 'string',
  'c_title'      : 'string',
  'c_date'       : 'string',
  'c_type'       : 'string',
  'c_vec_count'  : 'int',
  'c_vecs'       : ref.refType(_p_vec_info)
});
const _p_vec_info_all = ref.refType(_vec_info_all);

const _vec_values = c_struct({
  // p_name        : name of this point
  // p_real        : real part of this point
  // p_imag        : image part of this point
  // p_is_scale    :
  // p_is_complex  : indicate if this point is a complex point
  'p_name'         : 'string',
  'p_real'         : 'double',
  'p_imag'         : 'double',
  'p_is_scale'     : 'bool',
  'p_is_complex'   : 'bool'
});
const _p_vec_values = ref.refType(_vec_values);

const _vec_values_all = c_struct({
  // veccount : numbers of vectors
  // vecindex : vecindex
  // vecsa    :
  'v_count'   : 'int',
  'v_index'   : 'int',
  'v_a'       : ref.refType(_p_vec_values),
});
const _p_vec_values_all = ref.refType(_vec_values_all);

module.exports = {
  p_vec_values_all : _p_vec_values_all,
  p_vector_info    : _p_vector_info,
  p_vec_info_all   : _p_vec_info_all
}