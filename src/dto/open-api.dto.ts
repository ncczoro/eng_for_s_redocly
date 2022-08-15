import { ApiProperty } from '@nestjs/swagger';

export class LoginInputDto {
  @ApiProperty({
    description: 'tên đăng nhập, HDI cấp cho đối tác',
    required: true,
    maxLength: 100,
  })
  username: string;

  @ApiProperty({
    description: 'mật khẩu, HDI cấp cho đối tác',
    required: true,
    maxLength: 100,
  })
  password: string;
}

export class OpenApiInputDto {
  @ApiProperty({
    description: 'mã HDI cấp',
    maxLength: 40,
    required: true,
    example: 'ABCXYZ01',
  })
  actionCode: string;

  @ApiProperty({
    description: 'Dữ liệu đầu vào theo mã actionCode HDI cấp',
    required: true,
  })
  data: object;

  @ApiProperty({
    description: `Chữ ký nhận dạng client:
    \nBước 1: Convert data từ json sang string, sau đó hash dữ liệu vừa convert được theo thuật toán MD5.
    <div style="color: white; background-color: rgb(38, 50, 56)">md5HashedData =  MD5(JSON.stringify(data);</div>
    Convert md5HashedData sang string
    <div style="color: white; background-color: rgb(38, 50, 56)">strMd5HashedData = md5HashedData.toString(Hex);</div>
    Có thể kiểm tra strMd5HashedData trên trang https://www.md5hashgenerator.com input là string data. Example strMd5HashedData = '966ba203b585873ab724c78522c74b74'

    \nBước 2: Uppercase giá trị strMd5HashedData ở bước 1.
    \nTạo biến raw, theo định dạng
    <div style="color: white; background-color: rgb(38, 50, 56)">raw = 'HDI' + partnerCode + actionCode +  strMd5HashedData.toUpperCase() + 'HDI';</div>
    Sau đó hash raw theo thuật toán MD5
    <div style="color: white; background-color: rgb(38, 50, 56)">md5HashedRaw = MD5(raw);</div>
    Convert md5HashedRaw sang string
    <div style="color: white; background-color: rgb(38, 50, 56)">strMd5HashedRaw = md5HashedRaw.toString(Hex);</div>
    Có thể kiểm tra strMd5HashedRaw trên trang https://www.md5hashgenerator.com input là biến raw. Example strMd5HashedRaw = '1cacbb5b5eeda8429bb3fc1b24eab5c5'

    \nBước 3: Uppercase giá trị strMd5HashedRaw ở bước 2. Sau đó hash giá trị vừa tạo được theo thuật toán sha256 với secretKey là mã partnerSecret.
    <div style="color: white; background-color: rgb(38, 50, 56)">sha256HashedRaw = HmacSHA256(md5HashedStringRaw.toUpperCase(), partnerSecret);</div>
    Convert giá trị sang string(Hex)
    <div style="color: white; background-color: rgb(38, 50, 56)">strSha256HashedRaw = sha256HashedRaw.toString(Hex);</div>
    Có thể kiểm tra strSha256HashedRaw trên trang https://www.devglan.com/online-tools/hmac-sha256-online . Example strSha256HashedRaw = '364afdb3e5eeaecda623148f294bbb313e961cec854663384c7aa21766f45fcb'
    \nBước 4: Uppercase giá trị strSha256HashedRaw ở bước 3 . Giá trị nhận được là chữ ký. Example '364AFDB3E5EEAECDA623148F294BBB313E961CEC854663384C7AA21766F45FCB'
    `,
    required: true,
    example: '8583432C96873684A11F89A7DA0E60C799284A65DC8B71404C654AA069392932',
  })
  signature: string;
}
export class OpenApiOutputDto {
  @ApiProperty({
    description: 'true: thành công, false: lỗi',
  })
  success: boolean;

  @ApiProperty({
    description: '',
  })
  statusCode: number;

  @ApiProperty({
    description: 'Data trả về theo actionCode và input',
  })
  data: object;

  @ApiProperty({
    description: 'Định dạng hh:mm:ss MM/dd/YYYY',
  })
  timestamp: string;
}
