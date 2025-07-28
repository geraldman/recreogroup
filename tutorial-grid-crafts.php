<div class="tutorial-grid">
    <?php
        // $conn = new DBConn();
        $data = $conn->readAllCraftsTutorial();
        
        // Loop through the data from the database
        foreach($data as $card){
    ?>
    <div class="box-frame">
        <div class="box-image-frame">
            <img src="<?= htmlspecialchars($card["baseimg_url"]) ?>" alt="<?= htmlspecialchars($card["tutor_title"]) ?>">
        </div>
        
        <h3><?= htmlspecialchars($card["tutor_title"]) ?></h3>
        
        <a onclick="craftsTutorialRedirect(<?= $card['tutorial_id'] ?>)" class="box-button">Lihat ide ini</a>
    </div>
    <?php
        }
    ?>

    </div>