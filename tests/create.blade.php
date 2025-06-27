@extends('layouts.app')

@section('title', 'Upload Tutorial - ReCrea')

@section('content')
<div class="container py-4">
    <!-- Success/Error Messages -->
    @if(session('success'))
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <i class="fas fa-check-circle me-2"></i>
            {{ session('success') }}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    @endif

    @if(session('error'))
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <i class="fas fa-exclamation-circle me-2"></i>
            {{ session('error') }}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    @endif

    <!-- Main Form Card -->
    <div class="card shadow-lg border-0 rounded-4">
        <!-- Header -->
        <div class="card-header bg-success text-white text-center py-4 rounded-top-4">
            <h2 class="mb-0"><i class="fas fa-upload me-2"></i>Upload Crafts Tutorial Kamu</h2>
        </div>

        <!-- Form Content -->
        <div class="card-body p-4">
            <form action="{{ route('tutorial.store') }}" method="POST" enctype="multipart/form-data" id="tutorialForm">
                @csrf
                
                <!-- Row 1: Name and Category -->
                <div class="row mb-4">
                    <div class="col-md-6">
                        <label for="nama_kamu" class="form-label fw-bold">Nama kamu</label>
                        <input type="text" class="form-control @error('nama_kamu') is-invalid @enderror" 
                               name="nama_kamu" id="nama_kamu" placeholder="Nama kamu" 
                               value="{{ old('nama_kamu') }}" required>
                        @error('nama_kamu')
                            <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                    </div>
                    
                    <div class="col-md-6">
                        <label for="kategori_bahan" class="form-label fw-bold">Kategori berdasarkan bahan</label>
                        <select class="form-select @error('kategori_bahan') is-invalid @enderror" 
                                name="kategori_bahan" id="kategori_bahan" required>
                            <option value="">Pilih kategori bahan</option>
                            @foreach($categories as $key => $category)
                                <option value="{{ $key }}" {{ old('kategori_bahan') == $key ? 'selected' : '' }}>
                                    {{ $category }}
                                </option>
                            @endforeach
                        </select>
                        @error('kategori_bahan')
                            <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                    </div>
                </div>

                <!-- Judul Kreasi -->
                <div class="mb-4">
                    <label for="judul_kreasi" class="form-label fw-bold">Judul kreasi</label>
                    <input type="text" class="form-control @error('judul_kreasi') is-invalid @enderror" 
                           name="judul_kreasi" id="judul_kreasi" placeholder="Kasi judul tutorial kamu" 
                           value="{{ old('judul_kreasi') }}" required>
                    <div class="form-text">maksimal beberapa kata(?)</div>
                    @error('judul_kreasi')
                        <div class="invalid-feedback">{{ $message }}</div>
                    @enderror
                </div>

                <!-- Upload Section -->
                <div class="row mb-4">
                    <!-- Upload hasil foto -->
                    <div class="col-md-6">
                        <h5 class="mb-3"><i class="fas fa-image me-2"></i>Upload hasil foto</h5>
                        <div class="upload-area border border-2 border-dashed rounded-3 p-4 text-center position-relative @error('hasil_foto') border-danger @enderror" 
                             id="hasilUploadArea">
                            <i class="fas fa-cloud-upload-alt fa-3x text-muted mb-3"></i>
                            <p class="text-muted mb-0">Unggah 1 foto (format: png/jpeg/jpg)</p>
                            <input type="file" name="hasil_foto" id="hasil_foto" accept="image/*" 
                                   class="position-absolute top-0 start-0 w-100 h-100 opacity-0" 
                                   style="cursor: pointer;" required>
                        </div>
                        @error('hasil_foto')
                            <div class="text-danger small mt-1">{{ $message }}</div>
                        @enderror
                    </div>

                    <!-- Upload tutorial foto -->
                    <div class="col-md-6">
                        <h5 class="mb-3"><i class="fas fa-images me-2"></i>Upload tutorial foto</h5>
                        <div class="upload-area border border-2 border-dashed rounded-3 p-4 text-center position-relative @error('tutorial_foto') border-danger @enderror" 
                             id="tutorialUploadArea">
                            <i class="fas fa-cloud-upload-alt fa-3x text-muted mb-3"></i>
                            <p class="text-muted mb-0">Unggah maksimal 10 file (format: png/jpeg/jpg)</p>
                            <input type="file" name="tutorial_foto" id="tutorial_foto" accept="image/*" 
                                   class="position-absolute top-0 start-0 w-100 h-100 opacity-0" 
                                   style="cursor: pointer;" required>
                        </div>
                        @error('tutorial_foto')
                            <div class="text-danger small mt-1">{{ $message }}</div>
                        @enderror
                    </div>
                </div>

                <!-- Content Section -->
                <div class="row mb-4">
                    <!-- Bahan dan alat -->
                    <div class="col-md-6">
                        <h5 class="mb-3"><i class="fas fa-tools me-2"></i>Bahan dan alat yang dibutuhkan :</h5>
                        <textarea class="form-control @error('bahan_alat') is-invalid @enderror" 
                                  name="bahan_alat" id="bahan_alat" rows="8" 
                                  placeholder="Contoh:&#10;1. buat kardus ukuran sedang&#10;2. Gunting dan cutter&#10;3. Lem tembak atau lem putih&#10;4. Kertas warna atau cat akrilik" 
                                  required>{{ old('bahan_alat') }}</textarea>
                        @error('bahan_alat')
                            <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                        
                        <!-- Example Box -->
                        <div class="bg-light rounded-3 p-3 mt-3 text-center">
                            <h6 class="text-muted mb-3">CONTOH</h6>
                            <div class="d-flex justify-content-center">
                                <div class="example-character bg-white rounded-circle p-3 shadow-sm" style="width: 80px; height: 80px;">
                                    <i class="fas fa-leaf fa-2x text-success"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Langkah-langkah Tutorial -->
                    <div class="col-md-6">
                        <h5 class="mb-3"><i class="fas fa-list-ol me-2"></i>Langkah-langkah Tutorial :</h5>
                        <textarea class="form-control @error('langkah_tutorial') is-invalid @enderror" 
                                  name="langkah_tutorial" id="langkah_tutorial" rows="8" 
                                  placeholder="1. Potong kardus sesuai ukuran yang diinginkan untuk bagian utama.&#10;2. Rekatkan satu sisi menggunakan lem hingga membentuk kotak dasar.&#10;3. Hasil permukaan kasar dengan kertas warna atau cat.&#10;4. Tambahkan detail atau dekorasi tambahan sesuai selera." 
                                  required>{{ old('langkah_tutorial') }}</textarea>
                        @error('langkah_tutorial')
                            <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                        
                        <!-- Example Box -->
                        <div class="bg-light rounded-3 p-3 mt-3 text-center">
                            <h6 class="text-muted mb-0">CONTOH</h6>
                        </div>
                    </div>
                </div>

                <!-- Form Actions -->
                <div class="d-flex justify-content-between align-items-center pt-4 border-top">
                    <button type="button" class="btn btn-outline-secondary btn-lg px-4" onclick="resetForm()">
                        <i class="fas fa-arrow-left me-2"></i>Kembali
                    </button>
                    <button type="submit" class="btn btn-success btn-lg px-4">
                        <i class="fas fa-share me-2"></i>Bagikan sekarang
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection

@push('scripts')
<script>
    // Handle file uploads and preview
    document.getElementById('hasil_foto').addEventListener('change', function(e) {
        handleFileUpload(e, 'hasilUploadArea');
    });

    document.getElementById('tutorial_foto').addEventListener('change', function(e) {
        handleFileUpload(e, 'tutorialUploadArea');
    });

    function handleFileUpload(event, areaId) {
        const file = event.target.files[0];
        const uploadArea = document.getElementById(areaId);
        
        if (file) {
            // Validate file type
            if (!file.type.startsWith('image/')) {
                showAlert('File harus berupa gambar!', 'danger');
                event.target.value = '';
                return;
            }

            // Validate file size (2MB)
            if (file.size > 2 * 1024 * 1024) {
                showAlert('Ukuran file maksimal 2MB!', 'danger');
                event.target.value = '';
                return;
            }

            const reader = new FileReader();
            reader.onload = function(e) {
                uploadArea.innerHTML = `
                    <div class="position-relative">
                        <img src="${e.target.result}" alt="Preview" class="img-fluid rounded" style="max-height: 200px; width: 100%; object-fit: cover;">
                        <button type="button" class="btn btn-danger btn-sm position-absolute top-0 end-0 m-2" onclick="removeFile('${areaId}')">
                            <i class="fas fa-times"></i>
                        </button>
                        <div class="mt-2">
                            <small class="text-muted">${file.name}</small><br>
                            <small class="text-muted">${formatFileSize(file.size)}</small>
                        </div>
                    </div>
                `;
            };
            reader.readAsDataURL(file);
        }
    }

    function removeFile(areaId) {
        const uploadArea = document.getElementById(areaId);
        const isHasil = areaId === 'hasilUploadArea';
        
        uploadArea.innerHTML = `
            <i class="fas fa-cloud-upload-alt fa-3x text-muted mb-3"></i>
            <p class="text-muted mb-0">${isHasil ? 'Unggah 1 foto (format: png/jpeg/jpg)' : 'Unggah maksimal 10 file (format: png/jpeg/jpg)'}</p>
            <input type="file" name="${isHasil ? 'hasil_foto' : 'tutorial_foto'}" id="${isHasil ? 'hasil_foto' : 'tutorial_foto'}" accept="image/*" 
                   class="position-absolute top-0 start-0 w-100 h-100 opacity-0" style="cursor: pointer;" required>
        `;
        
        // Re-attach event listener
        const newInput = uploadArea.querySelector('input[type="file"]');
        newInput.addEventListener('change', function(e) {
            handleFileUpload(e, areaId);
        });
    }

    function formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    function showAlert(message, type) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
        alertDiv.innerHTML = `
            <i class="fas fa-exclamation-triangle me-2"></i>
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        const container = document.querySelector('.container');
        container.prepend(alertDiv);
        
        // Auto dismiss after 5 seconds
        setTimeout(() => {
            alertDiv.remove();
        }, 5000);
    }

    function resetForm() {
        if (confirm('Apakah Anda yakin ingin mengosongkan form?')) {
            document.getElementById('tutorialForm').reset();
            
            // Reset upload areas
            removeFile('hasilUploadArea');
            removeFile('tutorialUploadArea');
            
            showAlert('Form berhasil direset!', 'info');
        }
    }

    // Add hover effects for upload areas
    document.querySelectorAll('.upload-area').forEach(area => {
        area.addEventListener('mouseenter', function() {
            this.classList.add('border-success', 'bg-light');
        });
        
        area.addEventListener('mouseleave', function() {
            this.classList.remove('border-success', 'bg-light');
        });
    });
</script>
@endpush