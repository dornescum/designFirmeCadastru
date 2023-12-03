const sidebar = document.querySelector('.accordion-menu');

sidebar.innerHTML = `
                        <li class="">
                            <h4 class="member-status status-free">Status member</h4>
                        </li>
                        <li>
<!--  TODO adauga icoana-->
                            <h4>
                            Datele firmei / PFA
                            </h4>
                            </li>
                        <li>
                            <a href="index.html">
                                <i class="menu-icon icon-home4"></i><span>Date pricipale</span>
                            </a>
                        </li>
                        <li>
                            <a href="despreFirma.html">
                                <i class="menu-icon icon-inbox"></i><span>Despre firma</span>
                            </a>
                        </li>
                        <li>
                            <a href="dateFiscale.html">
                                <i class="menu-icon icon-book"></i><span>Date fiscale</span>
                            </a>
                        </li>
                        <li>
                            <a href="galerieFoto.html">
                                <i class="menu-icon icon-newspaper"></i><span>Galerie foto</span>
                            </a>
                        </li>
                        <li>
                            <a href="tipuriLucrari.html">
                                <i class="menu-icon icon-newspaper"></i><span>Tipuri de lucrari</span>
                            </a>
                        </li>
<!--contact-->
                        <li>
                            <h4>
                             <i class="menu-icon  mr-2 far fa-envelope "></i><span>Contact</span>
                            
                            </h4></li>

                        <li>
                            <a href="mesaje.html">
                                <i class="menu-icon icon-list2"></i><span>Mesaje</span>
                            </a>
                        </li>

                        <li>
                            <a href="reviews.html">
                                <i class="menu-icon icon-star-empty"></i><span>Date contact</span>
                            </a>
                        </li>

  
<!--abonamente-->
                        <li>
                            <h4>Abonamente</h4></li>

                        <li>
                            <a href="my-profile.html">
                                <i class="menu-icon icon-user"></i><span>Tipuri de abonament</span>
                            </a>
                        </li>

                        <li>
                            <a href="../index.html">
                                <i class="menu-icon icon-lock"></i><span>Judete</span>
                            </a>
                        </li>   
                           <li>
                            <a href="my-profile.html">
                                <i class="menu-icon icon-user"></i><span>Istoric</span>
                            </a>
                        </li>

                        <li>
                            <a href="../index.html">
                                <i class="menu-icon icon-lock"></i><span>Modalitati de plata</span>
                            </a>
                        </li>
<!--                        statistici-->
                          <li>
                            <h4>Statistici</h4></li>

                        <li>
                            <a href="my-profile.html">
                                <i class="menu-icon icon-user"></i><span>Generale</span>
                            </a>
                        </li>

                        <li>
                            <a href="../index.html">
                                <i class="menu-icon icon-lock"></i><span>Judete</span>
                            </a>
                        </li>   
                           <li>
                            <a href="my-profile.html">
                                <i class="menu-icon icon-user"></i><span>Individuale</span>
                            </a>
                        </li>                       
`;
