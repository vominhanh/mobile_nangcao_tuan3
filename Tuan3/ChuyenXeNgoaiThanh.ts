import ChuyenXe from "./ChuyenXeNoiThanh";

class XeNgoaiThanh extends ChuyenXe{

    private noiDen : string;
    private soNgayDiDuoc : number;
    
    /**
     * Getter $noiDen
     * @return {string}
     */
	public get $noiDen(): string {
		return this.noiDen;
	}

    /**
     * Getter $soNgayDiDuoc
     * @return {number}
     */
	public get $soNgayDiDuoc(): number {
		return this.soNgayDiDuoc;
	}

    /**
     * Setter $noiDen
     * @param {string} value
     */
	public set $noiDen(value: string) {
		this.noiDen = value;
	}

    /**
     * Setter $soNgayDiDuoc
     * @param {number} value
     */
	public set $soNgayDiDuoc(value: number) {
		this.soNgayDiDuoc = value;
	}
    

	constructor(maChuyen ?: string, hoTenTaiXe ?: string, soXe ?: string, noiDen?: string, soNgayDiDuoc?: number,doanhThu ?: number) {
        super(maChuyen, hoTenTaiXe, soXe,noiDen,soNgayDiDuoc, doanhThu);
        
        if(noiDen !== undefined && soNgayDiDuoc !== undefined && maChuyen!=undefined){
            this.noiDen = noiDen;
            this.soNgayDiDuoc = soNgayDiDuoc;
            this.maChuyen=maChuyen;
        }else{
            this.noiDen = "";
            this.soNgayDiDuoc = 0;
        }
    }

}

export default XeNgoaiThanh