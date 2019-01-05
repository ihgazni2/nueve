const utils = require("./utils")

const values = [5126, 35664, 35665, 35666, 5124, 35667, 35668, 35669, 35670, 35671, 35672, 35673, 35674, 35675, 35676, 35678, 35680, 5125, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 35678, undefined, 35680, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
const names = ["FLOAT", "FLOAT_VEC2", "FLOAT_VEC3", "FLOAT_VEC4", "INT", "INT_VEC2", "INT_VEC3", "INT_VEC4", "BOOL", "BOOL_VEC2", "BOOL_VEC3", "BOOL_VEC4", "FLOAT_MAT2", "FLOAT_MAT3", "FLOAT_MAT4", "SAMPLER_2D", "SAMPLER_CUBE", "UNSIGNED_INT", "UNSIGNED_INT_VEC2", "UNSIGNED_INT_VEC3", "UNSIGNED_INT_VEC4", "FLOAT_MAT2x3", "FLOAT_MAT2x4", "FLOAT_MAT3x2", "FLOAT_MAT3x4", "FLOAT_MAT4x2", "FLOAT_MAT4x3", "SAMPLER_2D", "SAMPLER_3D", "SAMPLER_CUBE", "SAMPLER_2D_SHADOW", "SAMPLER_2D_ARRAY", "SAMPLER_2D_ARRAY_SHADOW", "SAMPLER_CUBE_SHADOW", "INT_SAMPLER_2D", "INT_SAMPLER_3D", "INT_SAMPLER_CUBE", "INT_SAMPLER_2D_ARRAY", "UNSIGNED_INT_SAMPLER_2D", "UNSIGNED_INT_SAMPLER_3D", "UNSIGNED_INT_SAMPLER_CUBE", "UNSIGNED_INT_SAMPLER_2D_ARRAY"]
const nvDict = {
    BOOL:35670,
    BOOL_VEC2:35671,
    BOOL_VEC3:35672,
    BOOL_VEC4:35673,
    FLOAT:5126,
    FLOAT_MAT2:35674,
    FLOAT_MAT2x3:undefined,
    FLOAT_MAT2x4:undefined,
    FLOAT_MAT3:35675,
    FLOAT_MAT3x2:undefined,
    FLOAT_MAT3x4:undefined,
    FLOAT_MAT4:35676,
    FLOAT_MAT4x2:undefined,
    FLOAT_MAT4x3:undefined,
    FLOAT_VEC2:35664,
    FLOAT_VEC3:35665,
    FLOAT_VEC4:35666,
    INT:5124,
    INT_SAMPLER_2D:undefined,
    INT_SAMPLER_2D_ARRAY:undefined,
    INT_SAMPLER_3D:undefined,
    INT_SAMPLER_CUBE:undefined,
    INT_VEC2:35667,
    INT_VEC3:35668,
    INT_VEC4:35669,
    SAMPLER_2D:35678,
    SAMPLER_2D_ARRAY:undefined,
    SAMPLER_2D_ARRAY_SHADOW:undefined,
    SAMPLER_2D_SHADOW:undefined,
    SAMPLER_3D:undefined,
    SAMPLER_CUBE:35680,
    SAMPLER_CUBE_SHADOW:undefined,
    UNSIGNED_INT:5125,
    UNSIGNED_INT_SAMPLER_2D:undefined,
    UNSIGNED_INT_SAMPLER_2D_ARRAY:undefined,
    UNSIGNED_INT_SAMPLER_3D:undefined,
    UNSIGNED_INT_SAMPLER_CUBE:undefined,
    UNSIGNED_INT_VEC2:undefined,
    UNSIGNED_INT_VEC3:undefined,
    UNSIGNED_INT_VEC4:undefined
}

const vnDict = {
    5124:"INT",
    5125:"UNSIGNED_INT",
    5126:"FLOAT",
    35664:"FLOAT_VEC2",
    35665:"FLOAT_VEC3",
    35666:"FLOAT_VEC4",
    35667:"INT_VEC2",
    35668:"INT_VEC3",
    35669:"INT_VEC4",
    35670:"BOOL",
    35671:"BOOL_VEC2",
    35672:"BOOL_VEC3",
    35673:"BOOL_VEC4",
    35674:"FLOAT_MAT2",
    35675:"FLOAT_MAT3",
    35676:"FLOAT_MAT4",
    35678:"SAMPLER_2D",
    35680:"SAMPLER_CUBE",
}



module.exports = {
    n2v:utils.n2v,
    v2n:utils.v2n,
    vnDict:vnDict,
    nvDict:nvDict
}
